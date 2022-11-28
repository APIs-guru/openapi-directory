import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";



// CertificateMessage
/** 
 * Data returned by the <b>DescribeCertificates</b> action.
**/
export class CertificateMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Certificate })
  certificates?: Certificate[];

  @SpeakeasyMetadata()
  marker?: string;
}
