import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetExportExportTypeEnum {
    AlexaSkillsKit = "ALEXA_SKILLS_KIT",
    Lex = "LEX"
}
export declare enum GetExportResourceTypeEnum {
    Bot = "BOT",
    Intent = "INTENT",
    SlotType = "SLOT_TYPE"
}
export declare class GetExportQueryParams extends SpeakeasyBase {
    exportType: GetExportExportTypeEnum;
    name: string;
    resourceType: GetExportResourceTypeEnum;
    version: string;
}
export declare class GetExportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetExportRequest extends SpeakeasyBase {
    queryParams: GetExportQueryParams;
    headers: GetExportHeaders;
}
export declare class GetExportResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getExportResponse?: shared.GetExportResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
