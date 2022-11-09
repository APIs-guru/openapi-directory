import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BigtableColumn extends SpeakeasyBase {
  @Metadata({ data: "json, name=encoding" })
  encoding?: string;

  @Metadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @Metadata({ data: "json, name=onlyReadLatest" })
  onlyReadLatest?: boolean;

  @Metadata({ data: "json, name=qualifierEncoded" })
  qualifierEncoded?: string;

  @Metadata({ data: "json, name=qualifierString" })
  qualifierString?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
