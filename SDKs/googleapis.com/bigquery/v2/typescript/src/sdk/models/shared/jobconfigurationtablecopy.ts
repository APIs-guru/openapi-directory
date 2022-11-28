import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { TableReference } from "./tablereference";



export class JobConfigurationTableCopy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createDisposition" })
  createDisposition?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationEncryptionConfiguration" })
  destinationEncryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=destinationExpirationTime" })
  destinationExpirationTime?: any;

  @SpeakeasyMetadata({ data: "json, name=destinationTable" })
  destinationTable?: TableReference;

  @SpeakeasyMetadata({ data: "json, name=operationType" })
  operationType?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceTable" })
  sourceTable?: TableReference;

  @SpeakeasyMetadata({ data: "json, name=sourceTables", elemType: TableReference })
  sourceTables?: TableReference[];

  @SpeakeasyMetadata({ data: "json, name=writeDisposition" })
  writeDisposition?: string;
}
