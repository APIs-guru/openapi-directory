import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateTagOptionFromResourceXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisassociateTagOptionFromResource = "AWS242ServiceCatalogService.DisassociateTagOptionFromResource"
}
export declare class DisassociateTagOptionFromResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateTagOptionFromResourceXAmzTargetEnum;
}
export declare class DisassociateTagOptionFromResourceRequest extends SpeakeasyBase {
    headers: DisassociateTagOptionFromResourceHeaders;
    request: shared.DisassociateTagOptionFromResourceInput;
}
export declare class DisassociateTagOptionFromResourceResponse extends SpeakeasyBase {
    contentType: string;
    disassociateTagOptionFromResourceOutput?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    tagOptionNotMigratedException?: any;
}
