import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Issuer can add meta content specific to document here.
**/
export declare class PullUriResponseDocDetails extends SpeakeasyBase {
    dob: string;
    dataContent: string;
    digiLockerId: string;
    docContent: string;
    docType: string;
    fullName: string;
    udf1: string;
    udf2: string;
    uid: string;
    uri: string;
}
export declare class PullUriResponseResponseStatus extends SpeakeasyBase {
    status: string;
    ts: string;
    txn: string;
}
export declare class PullUriResponse extends SpeakeasyBase {
    docDetails: PullUriResponseDocDetails;
    responseStatus: PullUriResponseResponseStatus;
}
