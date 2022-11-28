import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationEnum } from "./applicationenum";
import { WorkspaceImageIngestionProcessEnum } from "./workspaceimageingestionprocessenum";
import { Tag } from "./tag";
export declare class ImportWorkspaceImageRequest extends SpeakeasyBase {
    applications?: ApplicationEnum[];
    ec2ImageId: string;
    imageDescription: string;
    imageName: string;
    ingestionProcess: WorkspaceImageIngestionProcessEnum;
    tags?: Tag[];
}
