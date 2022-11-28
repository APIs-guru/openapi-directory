import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";
export declare class UpdateEnvironmentTemplateVersionInput extends SpeakeasyBase {
    description?: string;
    majorVersion: string;
    minorVersion: string;
    status?: TemplateVersionStatusEnum;
    templateName: string;
}
