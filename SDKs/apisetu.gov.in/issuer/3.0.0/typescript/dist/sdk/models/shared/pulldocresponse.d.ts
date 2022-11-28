import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Issuer can add meta content specific to document here.
**/
export declare class PullDocResponseDocDetails extends SpeakeasyBase {
    dataContent: string;
    docContent: string;
}
export declare class PullDocResponseResponseStatus extends SpeakeasyBase {
    status: string;
    ts: string;
    txn: string;
}
export declare class PullDocResponse extends SpeakeasyBase {
    docDetails: PullDocResponseDocDetails;
    responseStatus: PullDocResponseResponseStatus;
}
