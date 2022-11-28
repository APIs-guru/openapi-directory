import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookOutputOptionEnum } from "./notebookoutputoptionenum";
/**
 * Specifies options for sharing SageMaker Studio notebooks. These settings are specified as part of <code>DefaultUserSettings</code> when the <code>CreateDomain</code> API is called, and as part of <code>UserSettings</code> when the <code>CreateUserProfile</code> API is called. When <code>SharingSettings</code> is not specified, notebook sharing isn't allowed.
**/
export declare class SharingSettings extends SpeakeasyBase {
    notebookOutputOption?: NotebookOutputOptionEnum;
    s3KmsKeyId?: string;
    s3OutputPath?: string;
}
