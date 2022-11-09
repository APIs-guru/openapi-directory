import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { TableReference } from "./tablereference";
import { TableReference } from "./tablereference";
import { TableReference } from "./tablereference";


export class JobConfigurationTableCopy extends SpeakeasyBase {
  @Metadata({ data: "json, name=createDisposition" })
  createDisposition?: string;

  @Metadata({ data: "json, name=destinationEncryptionConfiguration" })
  destinationEncryptionConfiguration?: EncryptionConfiguration;

  @Metadata({ data: "json, name=destinationExpirationTime" })
  destinationExpirationTime?: any;

  @Metadata({ data: "json, name=destinationTable" })
  destinationTable?: TableReference;

  @Metadata({ data: "json, name=operationType" })
  operationType?: string;

  @Metadata({ data: "json, name=sourceTable" })
  sourceTable?: TableReference;

  @Metadata({ data: "json, name=sourceTables", elemType: shared.TableReference })
  sourceTables?: TableReference[];

  @Metadata({ data: "json, name=writeDisposition" })
  writeDisposition?: string;
}
