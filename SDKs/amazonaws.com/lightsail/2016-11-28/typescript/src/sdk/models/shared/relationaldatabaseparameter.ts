import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RelationalDatabaseParameter
/** 
 * Describes the parameters of a database.
**/
export class RelationalDatabaseParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedValues" })
  allowedValues?: string;

  @SpeakeasyMetadata({ data: "json, name=applyMethod" })
  applyMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=applyType" })
  applyType?: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=isModifiable" })
  isModifiable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parameterName" })
  parameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterValue" })
  parameterValue?: string;
}
