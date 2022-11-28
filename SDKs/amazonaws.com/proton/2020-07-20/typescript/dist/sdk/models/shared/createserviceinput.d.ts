import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateServiceInput extends SpeakeasyBase {
    branchName?: string;
    description?: string;
    name: string;
    repositoryConnectionArn?: string;
    repositoryId?: string;
    spec: string;
    tags?: Tag[];
    templateMajorVersion: string;
    templateMinorVersion?: string;
    templateName: string;
}
