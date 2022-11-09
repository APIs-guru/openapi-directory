import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationEnum } from "./applicationenum";
import { WorkspaceImageIngestionProcessEnum } from "./workspaceimageingestionprocessenum";
import { Tag } from "./tag";


export class ImportWorkspaceImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Applications" })
  applications?: ApplicationEnum[];

  @Metadata({ data: "json, name=Ec2ImageId" })
  ec2ImageId: string;

  @Metadata({ data: "json, name=ImageDescription" })
  imageDescription: string;

  @Metadata({ data: "json, name=ImageName" })
  imageName: string;

  @Metadata({ data: "json, name=IngestionProcess" })
  ingestionProcess: WorkspaceImageIngestionProcessEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
