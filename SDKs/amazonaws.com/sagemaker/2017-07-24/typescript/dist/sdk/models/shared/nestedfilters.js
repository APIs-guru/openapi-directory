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
// NestedFilters
/**
 * <p>A list of nested <a>Filter</a> objects. A resource must satisfy the conditions of all filters to be included in the results returned from the <a>Search</a> API.</p> <p>For example, to filter on a training job's <code>InputDataConfig</code> property with a specific channel name and <code>S3Uri</code> prefix, define the following filters:</p> <ul> <li> <p> <code>'{Name:"InputDataConfig.ChannelName", "Operator":"Equals", "Value":"train"}',</code> </p> </li> <li> <p> <code>'{Name:"InputDataConfig.DataSource.S3DataSource.S3Uri", "Operator":"Contains", "Value":"mybucket/catdata"}'</code> </p> </li> </ul>
**/
var NestedFilters = /** @class */ (function (_super) {
    __extends(NestedFilters, _super);
    function NestedFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Filters", elemType: Filter }),
        __metadata("design:type", Array)
    ], NestedFilters.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NestedPropertyName" }),
        __metadata("design:type", String)
    ], NestedFilters.prototype, "nestedPropertyName", void 0);
    return NestedFilters;
}(SpeakeasyBase));
export { NestedFilters };
