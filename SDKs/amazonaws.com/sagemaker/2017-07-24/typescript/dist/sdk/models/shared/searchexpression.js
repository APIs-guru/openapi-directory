var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
import { NestedFilters } from "./nestedfilters";
import { BooleanOperatorEnum } from "./booleanoperatorenum";
// SearchExpression
/**
 * <p>A multi-expression that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results. You must specify at least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to twenty elements.</p> <p>A <code>SearchExpression</code> contains the following components:</p> <ul> <li> <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean expression comprised of a resource property name, Boolean operator, and value.</p> </li> <li> <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list of Boolean expressions using a list of resource properties. A nested filter is satisfied if a single object in the list satisfies all Boolean expressions.</p> </li> <li> <p>A list of <code>SearchExpression</code> objects. A search expression object can be nested in a list of search expression objects.</p> </li> <li> <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p> </li> </ul>
**/
var SearchExpression = /** @class */ (function (_super) {
    __extends(SearchExpression, _super);
    function SearchExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Filters", elemType: Filter }),
        __metadata("design:type", Array)
    ], SearchExpression.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NestedFilters", elemType: NestedFilters }),
        __metadata("design:type", Array)
    ], SearchExpression.prototype, "nestedFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Operator" }),
        __metadata("design:type", String)
    ], SearchExpression.prototype, "operator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubExpressions", elemType: SearchExpression }),
        __metadata("design:type", Array)
    ], SearchExpression.prototype, "subExpressions", void 0);
    return SearchExpression;
}(SpeakeasyBase));
export { SearchExpression };
