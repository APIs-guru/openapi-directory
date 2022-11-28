import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuxiliaryMessage } from "./auxiliarymessage";



// PrinterInput
/** 
 * Printer configuration.
**/
export class PrinterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=makeAndModel" })
  makeAndModel?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=useDriverlessConfig" })
  useDriverlessConfig?: boolean;
}


// Printer
/** 
 * Printer configuration.
**/
export class Printer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auxiliaryMessages", elemType: AuxiliaryMessage })
  auxiliaryMessages?: AuxiliaryMessage[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=makeAndModel" })
  makeAndModel?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=useDriverlessConfig" })
  useDriverlessConfig?: boolean;
}
