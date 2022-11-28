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
import { OperatorEnum } from "./operatorenum";
// Filter
/**
 * <p>A conditional statement for a search expression that includes a resource property, a Boolean operator, and a value. Resources that match the statement are returned in the results from the <a>Search</a> API.</p> <p>If you specify a <code>Value</code>, but not an <code>Operator</code>, Amazon SageMaker uses the equals operator.</p> <p>In search, there are several property types:</p> <dl> <dt>Metrics</dt> <dd> <p>To define a metric filter, enter a value using the form <code>"Metrics.&lt;name&gt;"</code>, where <code>&lt;name&gt;</code> is a metric name. For example, the following filter searches for training jobs with an <code>"accuracy"</code> metric greater than <code>"0.9"</code>:</p> <p> <code>{</code> </p> <p> <code>"Name": "Metrics.accuracy",</code> </p> <p> <code>"Operator": "GreaterThan",</code> </p> <p> <code>"Value": "0.9"</code> </p> <p> <code>}</code> </p> </dd> <dt>HyperParameters</dt> <dd> <p>To define a hyperparameter filter, enter a value with the form <code>"HyperParameters.&lt;name&gt;"</code>. Decimal hyperparameter values are treated as a decimal in a comparison if the specified <code>Value</code> is also a decimal value. If the specified <code>Value</code> is an integer, the decimal hyperparameter values are treated as integers. For example, the following filter is satisfied by training jobs with a <code>"learning_rate"</code> hyperparameter that is less than <code>"0.5"</code>:</p> <p> <code> {</code> </p> <p> <code> "Name": "HyperParameters.learning_rate",</code> </p> <p> <code> "Operator": "LessThan",</code> </p> <p> <code> "Value": "0.5"</code> </p> <p> <code> }</code> </p> </dd> <dt>Tags</dt> <dd> <p>To define a tag filter, enter a value with the form <code>Tags.&lt;key&gt;</code>.</p> </dd> </dl>
**/
var Filter = /** @class */ (function (_super) {
    __extends(Filter, _super);
    function Filter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Filter.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Operator" }),
        __metadata("design:type", String)
    ], Filter.prototype, "operator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Value" }),
        __metadata("design:type", String)
    ], Filter.prototype, "value", void 0);
    return Filter;
}(SpeakeasyBase));
export { Filter };
