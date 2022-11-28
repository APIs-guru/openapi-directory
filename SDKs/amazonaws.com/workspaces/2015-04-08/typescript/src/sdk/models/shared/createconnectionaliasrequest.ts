import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateConnectionAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionString" })
  connectionString: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
