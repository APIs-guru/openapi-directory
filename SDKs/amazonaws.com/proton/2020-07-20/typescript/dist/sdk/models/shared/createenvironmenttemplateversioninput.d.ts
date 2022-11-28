import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateVersionSourceInput } from "./templateversionsourceinput";
import { Tag } from "./tag";
export declare class CreateEnvironmentTemplateVersionInput extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    majorVersion?: string;
    source: TemplateVersionSourceInput;
    tags?: Tag[];
    templateName: string;
}
