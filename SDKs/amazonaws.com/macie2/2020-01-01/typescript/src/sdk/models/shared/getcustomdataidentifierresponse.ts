import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCustomDataIdentifierResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ignoreWords" })
  ignoreWords?: string[];

  @Metadata({ data: "json, name=keywords" })
  keywords?: string[];

  @Metadata({ data: "json, name=maximumMatchDistance" })
  maximumMatchDistance?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=regex" })
  regex?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
