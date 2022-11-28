import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaFieldSpec } from "./schemafieldspec";



// Schema
/** 
 * The type of API resource. For Schema resources, this is always `admin#directory#schema`.
**/
export class Schema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: SchemaFieldSpec })
  fields?: SchemaFieldSpec[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaId" })
  schemaId?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaName" })
  schemaName?: string;
}
