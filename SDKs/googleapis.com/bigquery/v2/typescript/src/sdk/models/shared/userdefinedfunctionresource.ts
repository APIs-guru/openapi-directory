import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserDefinedFunctionResource
/** 
 * This is used for defining User Defined Function (UDF) resources only when using legacy SQL. Users of Standard SQL should leverage either DDL (e.g. CREATE [TEMPORARY] FUNCTION ... ) or the Routines API to define UDF resources. For additional information on migrating, see: https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql#differences_in_user-defined_javascript_functions
**/
export class UserDefinedFunctionResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=inlineCode" })
  inlineCode?: string;

  @Metadata({ data: "json, name=resourceUri" })
  resourceUri?: string;
}
