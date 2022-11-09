import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSshKeysItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=public_key" })
  publicKey: string;
}
