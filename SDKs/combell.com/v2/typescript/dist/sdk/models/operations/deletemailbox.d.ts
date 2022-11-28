import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteMailboxPathParams extends SpeakeasyBase {
    mailboxName: string;
}
export declare class DeleteMailboxQueryParams extends SpeakeasyBase {
    mailboxName: string;
}
export declare class DeleteMailboxRequest extends SpeakeasyBase {
    pathParams: DeleteMailboxPathParams;
    queryParams: DeleteMailboxQueryParams;
}
export declare class DeleteMailboxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
