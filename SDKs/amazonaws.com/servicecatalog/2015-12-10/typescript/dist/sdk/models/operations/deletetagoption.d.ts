import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTagOptionXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteTagOption = "AWS242ServiceCatalogService.DeleteTagOption"
}
export declare class DeleteTagOptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTagOptionXAmzTargetEnum;
}
export declare class DeleteTagOptionRequest extends SpeakeasyBase {
    headers: DeleteTagOptionHeaders;
    request: shared.DeleteTagOptionInput;
}
export declare class DeleteTagOptionResponse extends SpeakeasyBase {
    contentType: string;
    deleteTagOptionOutput?: Map<string, any>;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagOptionNotMigratedException?: any;
}
