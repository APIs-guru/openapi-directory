import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";
/**
 * A summary of the version of an environment template detail data.
**/
export declare class EnvironmentTemplateVersionSummary extends SpeakeasyBase {
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
