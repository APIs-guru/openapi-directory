import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelReference } from "./modelreference";
import { TableReference } from "./tablereference";


export class JobConfigurationExtract extends SpeakeasyBase {
  @Metadata({ data: "json, name=compression" })
  compression?: string;

  @Metadata({ data: "json, name=destinationFormat" })
  destinationFormat?: string;

  @Metadata({ data: "json, name=destinationUri" })
  destinationUri?: string;

  @Metadata({ data: "json, name=destinationUris" })
  destinationUris?: string[];

  @Metadata({ data: "json, name=fieldDelimiter" })
  fieldDelimiter?: string;

  @Metadata({ data: "json, name=printHeader" })
  printHeader?: boolean;

  @Metadata({ data: "json, name=sourceModel" })
  sourceModel?: ModelReference;

  @Metadata({ data: "json, name=sourceTable" })
  sourceTable?: TableReference;

  @Metadata({ data: "json, name=useAvroLogicalTypes" })
  useAvroLogicalTypes?: boolean;
}
