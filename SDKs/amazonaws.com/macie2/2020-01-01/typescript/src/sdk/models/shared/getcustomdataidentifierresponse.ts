import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCustomDataIdentifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ignoreWords" })
  ignoreWords?: string[];

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=maximumMatchDistance" })
  maximumMatchDistance?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
