import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";
/**
 * A summary of the service template version detail data.
**/
export declare class ServiceTemplateVersionSummary extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    description?: string;
    lastModifiedAt: Date;
    majorVersion: string;
    minorVersion: string;
    recommendedMinorVersion?: string;
    status: TemplateVersionStatusEnum;
    statusMessage?: string;
    templateName: string;
}
