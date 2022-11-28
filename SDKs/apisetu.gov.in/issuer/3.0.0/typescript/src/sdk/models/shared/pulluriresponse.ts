import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PullUriResponseDocDetails
/** 
 * Issuer can add meta content specific to document here.
**/
export class PullUriResponseDocDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dob: string;

  @SpeakeasyMetadata()
  dataContent: string;

  @SpeakeasyMetadata()
  digiLockerId: string;

  @SpeakeasyMetadata()
  docContent: string;

  @SpeakeasyMetadata()
  docType: string;

  @SpeakeasyMetadata()
  fullName: string;

  @SpeakeasyMetadata()
  udf1: string;

  @SpeakeasyMetadata()
  udf2: string;

  @SpeakeasyMetadata()
  uid: string;

  @SpeakeasyMetadata()
  uri: string;
}


export class PullUriResponseResponseStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status: string;

  @SpeakeasyMetadata()
  ts: string;

  @SpeakeasyMetadata()
  txn: string;
}


export class PullUriResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  docDetails: PullUriResponseDocDetails;

  @SpeakeasyMetadata()
  responseStatus: PullUriResponseResponseStatus;
}
