import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuxiliaryMessage } from "./auxiliarymessage";


// Printer
/** 
 * Printer configuration.
**/
export class Printer extends SpeakeasyBase {
  @Metadata({ data: "json, name=auxiliaryMessages", elemType: shared.AuxiliaryMessage })
  auxiliaryMessages?: AuxiliaryMessage[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=makeAndModel" })
  makeAndModel?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=useDriverlessConfig" })
  useDriverlessConfig?: boolean;
}
