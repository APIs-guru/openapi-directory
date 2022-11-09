import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchemaFieldSpec } from "./schemafieldspec";


// Schema
/** 
 * The type of API resource. For Schema resources, this is always `admin#directory#schema`.
**/
export class Schema extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=fields", elemType: shared.SchemaFieldSpec })
  fields?: SchemaFieldSpec[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=schemaId" })
  schemaId?: string;

  @Metadata({ data: "json, name=schemaName" })
  schemaName?: string;
}
