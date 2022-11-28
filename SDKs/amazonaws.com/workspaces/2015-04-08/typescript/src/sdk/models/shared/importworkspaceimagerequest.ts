import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationEnum } from "./applicationenum";
import { WorkspaceImageIngestionProcessEnum } from "./workspaceimageingestionprocessenum";
import { Tag } from "./tag";



export class ImportWorkspaceImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Applications" })
  applications?: ApplicationEnum[];

  @SpeakeasyMetadata({ data: "json, name=Ec2ImageId" })
  ec2ImageId: string;

  @SpeakeasyMetadata({ data: "json, name=ImageDescription" })
  imageDescription: string;

  @SpeakeasyMetadata({ data: "json, name=ImageName" })
  imageName: string;

  @SpeakeasyMetadata({ data: "json, name=IngestionProcess" })
  ingestionProcess: WorkspaceImageIngestionProcessEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
