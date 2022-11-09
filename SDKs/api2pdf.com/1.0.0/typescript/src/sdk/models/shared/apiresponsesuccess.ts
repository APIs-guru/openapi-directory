import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiResponseSuccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=cost" })
  cost?: number;

  @Metadata({ data: "json, name=mbIn" })
  mbIn?: number;

  @Metadata({ data: "json, name=mbOut" })
  mbOut?: number;

  @Metadata({ data: "json, name=pdf" })
  pdf?: string;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
