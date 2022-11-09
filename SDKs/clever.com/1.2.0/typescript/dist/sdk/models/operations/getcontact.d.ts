import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetContactPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetContactRequest extends SpeakeasyBase {
    pathParams: GetContactPathParams;
}
export declare class GetContactResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    statusCode: number;
    studentContactResponse?: shared.StudentContactResponse;
}
