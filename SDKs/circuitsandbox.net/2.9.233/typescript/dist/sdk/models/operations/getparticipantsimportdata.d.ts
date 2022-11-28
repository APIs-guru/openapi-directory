import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetParticipantsImportDataPathParams extends SpeakeasyBase {
    spaceId: string;
}
export declare class GetParticipantsImportDataSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetParticipantsImportDataRequest extends SpeakeasyBase {
    pathParams: GetParticipantsImportDataPathParams;
    security: GetParticipantsImportDataSecurity;
}
export declare class GetParticipantsImportDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    participantsImportDataResult?: any;
    statusCode: number;
}
