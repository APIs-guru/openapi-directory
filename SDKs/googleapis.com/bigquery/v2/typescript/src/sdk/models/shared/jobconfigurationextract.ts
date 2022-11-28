import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelReference } from "./modelreference";
import { TableReference } from "./tablereference";



export class JobConfigurationExtract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compression" })
  compression?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationFormat" })
  destinationFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationUri" })
  destinationUri?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationUris" })
  destinationUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=fieldDelimiter" })
  fieldDelimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=printHeader" })
  printHeader?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sourceModel" })
  sourceModel?: ModelReference;

  @SpeakeasyMetadata({ data: "json, name=sourceTable" })
  sourceTable?: TableReference;

  @SpeakeasyMetadata({ data: "json, name=useAvroLogicalTypes" })
  useAvroLogicalTypes?: boolean;
}
