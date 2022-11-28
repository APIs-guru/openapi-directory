import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BigtableColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=onlyReadLatest" })
  onlyReadLatest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=qualifierEncoded" })
  qualifierEncoded?: string;

  @SpeakeasyMetadata({ data: "json, name=qualifierString" })
  qualifierString?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
