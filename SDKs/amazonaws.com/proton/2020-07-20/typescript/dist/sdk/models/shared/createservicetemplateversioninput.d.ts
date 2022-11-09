import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CompatibleEnvironmentTemplateInput } from "./compatibleenvironmenttemplateinput";
import { TemplateVersionSourceInput } from "./templateversionsourceinput";
import { Tag } from "./tag";
export declare class CreateServiceTemplateVersionInput extends SpeakeasyBase {
    clientToken?: string;
    compatibleEnvironmentTemplates: CompatibleEnvironmentTemplateInput[];
    description?: string;
    majorVersion?: string;
    source: TemplateVersionSourceInput;
    tags?: Tag[];
    templateName: string;
}
