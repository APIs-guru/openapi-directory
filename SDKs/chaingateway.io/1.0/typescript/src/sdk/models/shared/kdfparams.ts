import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Kdfparams extends SpeakeasyBase {
  @Metadata({ data: "json, name=dklen" })
  dklen: number;

  @Metadata({ data: "json, name=n" })
  n: number;

  @Metadata({ data: "json, name=p" })
  p: number;

  @Metadata({ data: "json, name=r" })
  r: number;

  @Metadata({ data: "json, name=salt" })
  salt: string;
}
