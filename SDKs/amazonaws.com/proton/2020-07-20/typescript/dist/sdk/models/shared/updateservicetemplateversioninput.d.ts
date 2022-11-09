import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CompatibleEnvironmentTemplateInput } from "./compatibleenvironmenttemplateinput";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";
export declare class UpdateServiceTemplateVersionInput extends SpeakeasyBase {
    compatibleEnvironmentTemplates?: CompatibleEnvironmentTemplateInput[];
    description?: string;
    majorVersion: string;
    minorVersion: string;
    status?: TemplateVersionStatusEnum;
    templateName: string;
}
