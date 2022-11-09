import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CompatibleEnvironmentTemplate } from "./compatibleenvironmenttemplate";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";
/**
 * The version of a service template detail data.
**/
export declare class ServiceTemplateVersion extends SpeakeasyBase {
    arn: string;
    compatibleEnvironmentTemplates: CompatibleEnvironmentTemplate[];
    createdAt: Date;
    description?: string;
    lastModifiedAt: Date;
    majorVersion: string;
    minorVersion: string;
    recommendedMinorVersion?: string;
    schema?: string;
    status: TemplateVersionStatusEnum;
    statusMessage?: string;
    templateName: string;
}
