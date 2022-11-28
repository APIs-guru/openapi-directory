import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSlotTypePathParams extends SpeakeasyBase {
    name: string;
}
export declare class PutSlotTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum PutSlotTypeRequestBodyValueSelectionStrategyEnum {
    OriginalValue = "ORIGINAL_VALUE",
    TopResolution = "TOP_RESOLUTION"
}
export declare class PutSlotTypeRequestBody extends SpeakeasyBase {
    checksum?: string;
    createVersion?: boolean;
    description?: string;
    enumerationValues?: shared.EnumerationValue[];
    parentSlotTypeSignature?: string;
    slotTypeConfigurations?: shared.SlotTypeConfiguration[];
    valueSelectionStrategy?: PutSlotTypeRequestBodyValueSelectionStrategyEnum;
}
export declare class PutSlotTypeRequest extends SpeakeasyBase {
    pathParams: PutSlotTypePathParams;
    headers: PutSlotTypeHeaders;
    request: PutSlotTypeRequestBody;
}
export declare class PutSlotTypeResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    preconditionFailedException?: any;
    putSlotTypeResponse?: shared.PutSlotTypeResponse;
    statusCode: number;
}
