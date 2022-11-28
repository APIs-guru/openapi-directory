import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PullDocResponseDocDetails
/** 
 * Issuer can add meta content specific to document here.
**/
export class PullDocResponseDocDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dataContent: string;

  @SpeakeasyMetadata()
  docContent: string;
}


export class PullDocResponseResponseStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status: string;

  @SpeakeasyMetadata()
  ts: string;

  @SpeakeasyMetadata()
  txn: string;
}


export class PullDocResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  docDetails: PullDocResponseDocDetails;

  @SpeakeasyMetadata()
  responseStatus: PullDocResponseResponseStatus;
}
