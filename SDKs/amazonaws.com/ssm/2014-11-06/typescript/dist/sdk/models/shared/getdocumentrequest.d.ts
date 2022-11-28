import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentFormatEnum } from "./documentformatenum";
export declare class GetDocumentRequest extends SpeakeasyBase {
    documentFormat?: DocumentFormatEnum;
    documentVersion?: string;
    name: string;
    versionName?: string;
}
