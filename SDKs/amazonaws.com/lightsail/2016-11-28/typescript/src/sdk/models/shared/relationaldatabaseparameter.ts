import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RelationalDatabaseParameter
/** 
 * Describes the parameters of a database.
**/
export class RelationalDatabaseParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedValues" })
  allowedValues?: string;

  @Metadata({ data: "json, name=applyMethod" })
  applyMethod?: string;

  @Metadata({ data: "json, name=applyType" })
  applyType?: string;

  @Metadata({ data: "json, name=dataType" })
  dataType?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=isModifiable" })
  isModifiable?: boolean;

  @Metadata({ data: "json, name=parameterName" })
  parameterName?: string;

  @Metadata({ data: "json, name=parameterValue" })
  parameterValue?: string;
}
