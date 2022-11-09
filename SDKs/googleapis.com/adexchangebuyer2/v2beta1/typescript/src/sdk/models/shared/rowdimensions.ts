import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeInterval } from "./timeinterval";


// RowDimensions
/** 
 * A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.
**/
export class RowDimensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=publisherIdentifier" })
  publisherIdentifier?: string;

  @Metadata({ data: "json, name=timeInterval" })
  timeInterval?: TimeInterval;
}
