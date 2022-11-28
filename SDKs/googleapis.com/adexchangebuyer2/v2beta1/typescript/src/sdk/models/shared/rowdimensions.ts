import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeInterval } from "./timeinterval";



// RowDimensions
/** 
 * A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.
**/
export class RowDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publisherIdentifier" })
  publisherIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=timeInterval" })
  timeInterval?: TimeInterval;
}
