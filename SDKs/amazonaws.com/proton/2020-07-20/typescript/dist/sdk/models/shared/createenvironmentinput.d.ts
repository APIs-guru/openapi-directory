import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class CreateEnvironmentInput extends SpeakeasyBase {
    description?: string;
    environmentAccountConnectionId?: string;
    name: string;
    protonServiceRoleArn?: string;
    spec: string;
    tags?: Tag[];
    templateMajorVersion: string;
    templateMinorVersion?: string;
    templateName: string;
}
