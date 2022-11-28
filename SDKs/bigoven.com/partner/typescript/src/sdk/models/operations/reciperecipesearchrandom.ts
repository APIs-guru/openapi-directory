import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecipeRecipeSearchRandomQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=any_kw" })
  anyKw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=boostmine" })
  boostmine?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=champion" })
  champion?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=chs" })
  chs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=coll" })
  coll?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cps" })
  cps?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cuisine" })
  cuisine?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=db" })
  db?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dyf" })
  dyf?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_cat" })
  excludeCat?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_ing" })
  excludeIng?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_primarycat" })
  excludePrimarycat?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=folder" })
  folder?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=glf" })
  glf?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_cat" })
  includeCat?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_ing" })
  includeIng?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_primarycat" })
  includePrimarycat?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxIngredients" })
  maxIngredients?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minIngredients" })
  minIngredients?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ntf" })
  ntf?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photos" })
  photos?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rmf" })
  rmf?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=servingsMin" })
  servingsMin?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sff" })
  sff?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slf" })
  slf?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=synonyms" })
  synonyms?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title_kw" })
  titleKw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tnf" })
  tnf?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=totalMins" })
  totalMins?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userset" })
  userset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vgn" })
  vgn?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vtn" })
  vtn?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wmf" })
  wmf?: number;
}


export class RecipeRecipeSearchRandomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RecipeRecipeSearchRandomQueryParams;
}


export class RecipeRecipeSearchRandomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApi2RecipeSearchResult?: shared.BigOvenModelApi2RecipeSearchResult;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
