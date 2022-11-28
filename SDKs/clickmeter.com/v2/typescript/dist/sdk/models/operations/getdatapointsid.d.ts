import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatapointsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetDatapointsIdRequest extends SpeakeasyBase {
    pathParams: GetDatapointsIdPathParams;
}
export declare class GetDatapointsIdResponse extends SpeakeasyBase {
    apiCoreDtoDatapointsDatapoint?: shared.ApiCoreDtoDatapointsDatapoint;
    contentType: string;
    statusCode: number;
}
