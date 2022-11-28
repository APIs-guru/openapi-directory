import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";
/**
 * The environment template version data.
**/
export declare class EnvironmentTemplateVersion extends SpeakeasyBase {
    arn: string;
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
